<template>
  <div class="p-8 pb-0 text-orange-500">
    <h1 class="text-4xl font-bold mb-4">About Church Welfare International (CWi)</h1>
    <div style="color: black;font-size: 17px;">
      <p><b>Who We Are</b></p>
    <div>
      <b>Church Welfare International (CWi)</b> is a duly registered Christ-Centred NGO based in Lagos, Nigeria. This outfit established solely for the purpose of promoting the welfare of the church of Jesus Christ.
    </div>
    <p><b>Our Motivation</b></p>
    <div>
      <p>The motivation for this NGO includes among others the following:</p>
      <ol>
        <li>1. The recognition and conviction that the church of the Lord Jesus Christ is a treasure and one that is very precious and dear to His heart. </li>
        <li>2. The recognition and conviction the church of Jesus is the most important institution on earth and should be most cared for.</li>
        <li>3. The recognition and conviction the church’s mandate of propagating the Good news of Jesus is the most important assignment, one that holds the answer to the world’s problems both now and for eternity. </li>
        <li>4. The recognition and conviction promoting and enhancing her effectiveness in ministering the Gospel of Jesus Christ is a very important and worthwhile task anyone can be engaged in.</li>
      </ol>
    </div>
    <p><b>Our Vision</b></p>
    <div>Towards a strong, vibrant, impacting, effective church</div>
    <p><b>Our Mission</b></p>
    <div>
      <p>The mission of CWi includes the following:</p>
      <ol>
        <li>1.	To strengthen churches of Jesus Christ through the provision of critical supports</li>
        <li>2.	To strengthen struggling poorly funded churches through intervention funding</li>
        <li>3.	To enhance the quality of church workers through training and development.</li>
        <li>4.	To contribute to the effectiveness of churches through quality research</li>
      </ol>
      <p><b>Support Spread</b></p>
      <p>Our involvement in churches will cover the following areas:</p>
      <ol>
        <li>1.	Providing intervention funds for churches in critical conditions especially those in rural/ undeveloped areas</li>
        <li>2.	Promoting unity of churches through integration and church arbitration</li>
        <li>3.	Conducting personnel training for church workers such as instrumentalists, ushers, greeters etc</li>
        <li>4.	Organizing enlightening seminars for church leadership</li>
        <li>5.	Technical support through provision of </li>
        <li>6.	Youth empowerment</li>
        <li>7.	Research & Development</li>
        <li>8.	Widows & single parents empowerment</li>
      </ol>
    </div>
    <p><b>Our Team</b></p>
    <div>
      Our team at CWi is made of people with credible and proven integrity. They are spirit filled believers who love the Lord and are committed to promoting the course of Christ through healthy contribution to the welfare of Christ’s church.
    </div>
    <p><b>“The Church”</b></p>
    <div>
      <p>For the purpose of the operations of CWi “the church” represents organizations that believe in the complete Gospel of the Lord Jesus Christ as presented in the Holy Bible and are established for the purpose of spreading the Good News of salvation and preparing people for eternity. Among other things it emphasizes the following:</p>
    <ul>
      <li>•	Faith in Jesus Christ as Lord and Saviour</li>
      <li>•	The teaching of the bible as the inspired book that reveals the will of God</li>
      <li>•	Personal holiness in response to, and appreciation for the grace of God</li>
      <li>•	Love for all men </li>
    </ul>
    <p><b>Sub-Units</b></p>
    <ul>
      <li><b>•	Church Welfare Empowerment Centre (CWEC):</b> Training of church supportive and para-ministry workers especially those in the helps ministry to enhance their effectiveness. This includes such groups as greeters, ushers, music ministers, sanctuary keepers, church guards and other volunteers. This would be done through seminars, workshops etc </li>
      <li><b>•	Church Welfare Information and Research Centre (CWIRC):</b> This focuses on enhancing the overall efficiency and effectiveness of the church through quality research into current trends and other areas that bear on core evangelistic and discipleship mission of the church. </li>
      <li><b>•	Church Welfare Outreach Unit (CWOU):</b> This would be involved in planning strategic outreach programs which are designed to take the church to those that mostly need it. This is in line with the mission strategy of Matthew 9:9-13. Key ares of interest will include prisons, joints, villages, schools, rehab centres and so on.</li>
      <li><b>•	Church Welfare Intervention Funds (CWIFs):</b> Main activity shall be providing financial supports to churches in less developed and rural areas with dare needs of critical financial, manpower, material and structural resources necessary for effective operations.</li>
    </ul>   
    </div>
    <p><b>Our Values</b></p>
    <ul>
      <li>•	Transparency and Accountability</li>
      <li>•	Fairness </li>
      <li>•	Passion</li>
      <li>•	Fear of God</li>
      <li>•	Creativity</li>
      <li>•	Commitment</li>
      <li></li>
    </ul>
    </div>
  </div>
  <!-- <Meals :events="events" /> -->

</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
// import Meals from "../components/Meals.vue";
import axiosClient from "../axiosClient.js";


const events = ref([]);


onMounted(async () => {
    // try {
    //   const { data } = await axiosClient.get(`get-random-meals`);
    //   debugger
    //   for (let i = 0; i < data.length; i++) {
    //     meals.value.push(data[i])
    //   }
    // } catch (error) {
    //   if (axiosClient.isAxiosError(error)) {
    //     handleAxiosError(error);
    //   } else {
    //     handleUnexpectedError(error);
    //   }
    // }
      
});
</script>
