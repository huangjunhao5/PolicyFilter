<template>
  <div class="container">
    <el-header><h1>后台管理</h1></el-header>
    <el-main>
      <el-row>
        <el-col :span="6">
          <el-upload
              class="upload-csv"
              action="your-backend-api-for-uploading-csv-file"
              :on-success="handleUploadSuccess"
              :on-error="handleUploadSuccess"
          >
            <el-button type="primary">上传CSV文件</el-button>
          </el-upload>
        </el-col>
<!--        <el-col :span="18">-->
<!--          <el-input v-model="searchText" placeholder="输入关键字搜索文章"></el-input>-->
<!--          <el-button type="primary" @click="search">搜索</el-button>-->
<!--        </el-col>-->
      </el-row>
      <el-table :data="tableData" v-model="selectedRows" style="width: 100%; padding-top: 2em;" @selection-change="handleSelectChange">
        <el-table-column type="selection"></el-table-column>
        <el-table-column prop="policyTitle" label="标题" :cell-style="{padding: '0 200px'}"></el-table-column>
        <el-table-column prop="pubAgency" label="机构"></el-table-column>
        <el-table-column prop="pubTime" label="发布时间"></el-table-column>
<!--        <el-table-column-->
<!--            label="操作"-->
<!--            width="180"-->
<!--            align="center"-->
<!--            :render-header="renderHeader"-->
<!--            :render-cell="renderCell"-->
<!--        ></el-table-column>-->
      </el-table>
      <div class="button-container" style="padding-top: 4em;">
        <el-button type="danger" @click="batchDelete">批量删除</el-button>
      </div>
    </el-main>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { ElButton, ElCol, ElHeader,  ElMain, ElRow, ElTable, ElTableColumn, ElUpload } from 'element-plus';
import request, {success} from "@/request/request";
import { ElMessageBox, ElMessage } from 'element-plus'
import JsCookie from "js-cookie";


export default {
  components: {
    ElButton,
    ElCol,
    ElHeader,
    // ElInput,
    ElMain,
    ElRow,
    ElTable,
    ElTableColumn,
    ElUpload,
  },
  setup() {
    const state = reactive({
      tableData: [],
      selectedRows: [],
      searchText: '',
    });

    const handleUploadSuccess = (response, file, fileList) => {
      // 处理上传成功后的逻辑，比如更新 tableData
      console.log(response + file + fileList);

      ElMessage.success("上传成功");
      // location.reload();
    };

    const deleteArticle = (row) =>{
      console.log(row);
    }

    const handleSelectAllChange = () => {
      //
    }

    // const editArticle = (row) => {
    //   //
    //   console.log(row)
    // }

    // const renderHeader = () => {
    //   return (
    //       // <el-checkbox
    //       //     indeterminate={state.selectedRows.length > 0 && state.selectedRows.length < state.tableData.length}
    //       //     v-model={state.selectAll}
    //       //     onChange={handleSelectAllChange}
    //       // ></el-checkbox>
    //   );
    // };

    // const renderCell = (row) => {
    //   return (
    //       <span>
    //       <el-button type="text" onClick={() => editArticle(row)}>编辑</el-button>
    //       <el-button type="text" onClick={() => deleteArticle(row)}>删除</el-button>
    //     </span>
    //   );
    // };

    // const search = () => {
    //   // 发送检索请求，更新 tableData
    // };
    return {
      ...toRefs(state),
      handleUploadSuccess,
      // renderHeader,
      // renderCell,
      // search,
      // batchDelete,
      // editArticle,
      handleSelectAllChange,
      deleteArticle,
    };
  },
  mounted() {
    let token = JsCookie.get("token");
    if(!token){
      this.$router.push({
        path: '/',
      })
    }
    this.setTableData();
  },
  methods:{
    batchDelete(){
      // 发送批量删除请求，更新 tableData
      ElMessageBox.confirm('确定删除所选数据吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 遍历选中的数据，逐一删除
        // this.selectedRows.forEach(row => {
        //   const index = this.tableData.indexOf(row);
        //   if (index !== -1) {
        //     // this.tableData.splice(index, 1);
        //     console.log(this.tableData.splice(index, 1));
        //   }
        // });
        // console.log(this.selectedRows);
        for(let i = 0;i < this.selectedRows.length;i++){
          request.delete('/file/delete/' + this.selectedRows[i].policyId).then((res) => {
            if(res.code == success){
              // ElMessage.success("删除成功!");
            }else{
              ElMessage.error("发生错误，已经删除了" + i + '条数据');
              return;
            }
          })
        }
        // // 删除完后清空选中的数据
        // this.selectedRows = [];
        this.setTableData();
        ElMessage.success('删除成功!');
      }).catch(() => {
        ElMessage.info('删除被取消！');
      });
    },
    handleSelectChange(row){
      this.selectedRows = row;
    },
    setTableData(){
      request.get('/file/query?page=0&&size=50&&keyword=杭州').then((res) => {
        this.tableData = res.data.content;
      })
    }
  }
};
</script>


