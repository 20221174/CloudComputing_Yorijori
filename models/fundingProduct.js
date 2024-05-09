// models/fundingProduct.js
//펀딩상품
mudule.exports = (sequelize, Sequelize) =>{

class FundingProduct extends Sequelize.Model {}

FundingProduct.init({
  fundingProductId: { //펀딩상품번호
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  productName: { //상품명
    type: Sequelize.STRING,
    allowNull: false
  },
  seller: { //판매자
    type: Sequelize.STRING,
    allowNull: false
  },
  unitPrice: { //단가
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  expirationDate: { //유통기한
    type: Sequelize.DATE,
    allowNull: false
  },
  quantity: { //수량
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  registrationDate: { //상품등록일자
    type: Sequelize.DATE,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'fundingProduct'
});
return fundingProductId;
}