<el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" width="700px">
    <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="demo-ruleForm">
        <el-row>
        <el-col :span="12">
          <el-form-item label="代理商" prop="userId">
            <el-select v-model="form.userId" @change="handleUserIdOption($event)" clearable filterable placeholder="请选择代理商" filterable>
              <el-option v-for="item in users" :key="item.id" :label="item.userName" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="设备组" prop="groupId">
            <el-select v-model="form.groupId" clearable filterable placeholder="请选择设备组">
              <el-option v-for="item in deviceGroupsEdit" :label="item.groupName" :key="item.id" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="商品名称" prop="goodsId">
           <el-cascader
             :options="goodsOptions"
             @active-item-change="handleItemChange"
             @change = "categoryChange($event)"
             :props="props"
             :clearable="true"
             filterable>
            </el-cascader>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="商品价格" prop="goodsPrice">
            <el-input v-model.number="form.goodsPrice" min="0" step="0.5" style="width:220px" type="number" placeholder="请输入商品价格"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="是否推荐" prop="isRecommend">
            <el-switch
              v-model="form.isRecommend"
              active-value="1"
              inactive-value="0"
              active-color="#13ce66"
              inactive-color="#ff4949">
            </el-switch>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="预售时间" prop="presellAt">
            <el-date-picker v-model="form.presellAt" value-format="yyyy-MM-dd HH:mm:ss" type="datetime" placeholder="请选择日期时间">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="cancel('form')">取 消</el-button>
      <el-button v-if="dialogStatus=='create'" type="primary" @click="create('form')">确 定</el-button>
      <el-button v-else type="primary" @click="update('form')">确 定</el-button>
    </div>
  </el-dialog>
props:{
        label: 'label',
        value: 'value',
        children: 'children'
      },
categoryChange(val){//选取商品后给goodsId赋值
      this.form.goodsId = val[1];
      /*console.log(val[0]);
      console.log(val[1]);*/
    },

    getGoodsOptions(){//获取所有的商品类型
      getGoodsOptions()
        .then(response =>{
          this.goodsOptions = response;
          //alert(this.goodsOptions);
          this.goodsOptions.forEach((item,index)=>{
            this.$set(this.goodsOptions[index], 'children', []) // right
          })
        })
    },
handleItemChange(val){//商品级联
      //console.log(val);
      let value = val[0];
      getGoodsByGoodsType(value)
        .then(response =>{
          for (let i = 0; i <this.goodsOptions.length ; i++) {
            if(this.goodsOptions[i].value == value){
              this.$set(this.goodsOptions[i],"children",response);
            }
          }
        })
    },

handleCreate() {
      this.resetTemp();
      this.deviceGroupsEdit = [];
      this.getGoodsOptions();
      this.dialogStatus = 'create';
      this.dialogFormVisible = true;
    },