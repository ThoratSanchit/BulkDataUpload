const model=require('../model/model');
class service {
    static async saveData(data) {
      try {
        const result = await model.create(data);
        return result;
      } catch (error) {
        throw error;
      }
    }
  
  
  }

module.exports=service;