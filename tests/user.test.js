const request=require('supertest')
const app=require('../src/app')
const User=require('../src/models/user')
const { userOneid,userOne,setupDatabase}= require('./fixtures/db')

beforeEach(setupDatabase)

test('Should signup a new user',async()=>{
   const response= await request(app).post('/users').send({
        name:"jatin kumar",
        email:"jatinkumarrao@gmail.com",
        passwordone:"1234567",
        passwordtwo:"1234567"
    }).expect(201)

    const user= await User.findById(response.body.user._id)
    expect(user).not.toBeNull()
    expect(response.body).toMatchObject({
        user: {
            name:"jatin kumar",
            email:"jatinkumarrao@gmail.com"
            },
        token: user.tokens[0].token 
    })
    expect(user.password).not.toBe('1234567')

    // expect(response.body).toMatchObject({
    //   user:{
    //     name:"jatin kumar",
    //     email:"jatinkumarrao@gmail.com"
    //   },
    //   token: user.tokens[0].token 
    // })
})
test('Should login existing user',async()=>{
   const response= await request(app).post('/users/login').send({
        email:userOne.email,
        password:userOne.passwordone
    }).expect(200)
    const user = await User.findById(userOneid)
    expect(response.body.token).toBe(user.tokens[1].token)
    //const user= User.findById(userOneid)
    //expect(response.body.token).toBe(user.tokens[0].token)
    })
test('Should not login nonexisting user',async()=>{
    await request(app).post('/users/login').send({
        email:"aman@gmail.com",
        password:userOne.passwordone
    }).expect(400)
})
test('Should get profile for user',async()=>{
    await request(app)
        .get('/users/me')
        .set("Authorization",`Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
})
test('Should not get profile for unauthenticated user',async()=>{
    await request(app)
        .get('/users/me')
        .send()
        .expect(401)
})
test('Should delete account for user',async()=>{
    const response=await request(app)
        .delete('/users/me')
        .set("Authorization",`Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
    const user= await User.findById(userOneid)
    expect(user).toBeNull()
    })
test('Should not delete account for unauthenticated user',async()=>{
    await request(app)
        .delete('/users/me')
        .send()
        .expect(401)
})
test('Should upload avatar image',async()=>{
    await request(app)
        .post('/users/me/avatar')
        .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
        .attach('avatar','tests/fixtures/profile-pic.jpg')
        .expect(200)
        const user= await User.findById(userOneid)
        expect(user.avatar).toEqual(expect.any(Buffer))
})
test('Should update valid user fields',async()=>{
    await request(app)
        .patch('/users/me')
        .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
        .send({
            name:"rohan sharma",
            email:"rohansharma@gmail.com"
        })
        .expect(200)
        const user =await User.findById(userOneid)
        expect(user.name).toEqual("rohan sharma")
})
test('Should not update invalid user fields',async()=>{
    await request(app)
        .patch('/users/me')
        .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
        .send({
            "location":"kapurthala"
        })
        .expect(400)

})