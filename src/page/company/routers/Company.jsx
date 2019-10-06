import React, { Component } from 'react';
import DefaultLayout from '../../../component/DefaultLayout';

class Company extends Component {


  render() {

    return (
      <DefaultLayout>
        <div className="company">
          <div className="company-banner">
            <h1>做更好的云通讯服务商</h1>
            <p>致力于帮助企业与客户更好的沟通</p>
          </div>
          <div className="company-intro">
            <div className="company-intro-title">
              <h3>公司简介</h3>
            </div>
            <div className="company-intro-content">
              <p>
                浙江瓯海禾丰粉丝机制造厂地处温州市瓯海娄桥，是国内较早生产粉丝机设备的厂家。
              </p>
              <p>
                禾丰机械顺应市场需求，服务经济建设，面向企业和基层。经过多年的努力与创新，逐步发展成为极具竞争优势的规模化企业，并以雄厚的技术实力，相继开发研制了一系列品质可靠经济实用能为用户带来良好经济效益的先进设备，该系列产品畅销全国各地。
              </p>
              <p>
                历年来，企业荣获了省市“科技进步奖”，“发明成果奖”等诸多奖项。禾丰机械以良好的信誉赢得了全国用户的信赖，得到了各级领导的好评。
              </p>
              <p>
                本厂产品：节能粉丝机及成套生产设备
              </p>
              <p>
                “质量第一”，“用户至上”是我们的经营宗旨，我们将本着务实的合作态度和灵活多变的经营策略，欢迎广大新老用户光临指导——愿我们精诚合作，共创辉煌！
              </p>
            </div>
          </div>
          <div className="company-flavour">
          </div>
        </div>
      </DefaultLayout>
    )
  }
}

export default Company;