const express=require('express')
const user =require('./MOCK_DATA.json')

const app=express();
app.get('/api/users',(req,res)=>{
    return res.json(user);

})

// NOTE :-  OUR BROWSER BY DEFAULT SUPPORT THE GET REQUEST BUT FOR PATCH POST AND DELETE REQUEST WE NEED TO THE PSOTMAN 

app.route('/api/users/:id')
.get((req,res)=>{
    const html=`
<ul>
${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
</ul>`;
res.send(html);})
.patch((req,res)=>{
    return res.json({status:"pending" });

})
.delete((req,res)=>{
    return res.json({status:"pending "});

})

// TO CREATE THE HTML DOCUMENT

app.get("/users",(req,res)=>{
    const html=`
<ul>
${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
</ul>`;
res.send(html);
})


app.get('/api/users/:id',(req,res)=>{
    const id =Number(req.params.id);
    const users=user.find((user)=>user.id===id);
    return res.json(users);
})

app.listen(5000,()=>{
    console.log('server is listening at port of 5000')
})
