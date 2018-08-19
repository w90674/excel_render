/**
 * Created by Sukid on 2018/7/28.
 */
const express=require('express')
const app=express()
const axios=require('axios')

app.get('/getJson',function (req,res) {
  axios.get('http://pbwvj20gk.bkt.clouddn.com/data.json').then(response=>{
    res.send(response.data)
  })
})
app.get('/getJson2',function (req,res) {
  axios.get('http://127.0.0.1:8085/developer/findDeveloper').then(response=>{
    res.send(response.data)
  }).catch(err=>console.log(err))
})
app.get('/getJson3',function (req,res) {
  axios.get('http://127.0.0.1:8085/developer/findDeveloper').then(response=>{
    res.send(response.data)
  }).catch(err=>console.log(err))
})

app.listen(8082)
