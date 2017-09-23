function MyAuth(authService){
   this.authService = anthService
    this.signInWithFacebook = (phone , password) =>{
        let fbUserObject = this.authService ('phone','password')
    return fbUserObject
   }
}



//function returnInt (val){
    //return val
//} 


//test('Mock function 1  should be return 1' ,() =>{
    //const returnInt = jest.fn().mockReturnValue(1)
   
   
   // const a = 1
    
    
    //consol.log('Result from mockFn()  = $(mockFn())')
   // expect (returnInt(1)).toBe (1)
   // expect (returnInt).toBeCalledWith(1)

//})
//test('call signIn withFacebook with valid credential should pass',() =>{
 //   const facebookAuth = jest.fn('0626942458','abc1234')
 //   .mockReturnValue  ({ name: 'Sirirat' , facebookId: '123456789', email: 'teeneungeiei@hotmail.com'})
  //  let app = new MyAuth(facebookAuth)
  //  let phon = '0626942458'
  //  let password = 'abc1234'
   // let value = app.signInWIthFacebook(phone , password)

    //expect(value).toEqual({ name: 'Sirirat' , facebookId: '123456789', email: 'teeneungeiei@hotmail.com'})
   // expect(facebookAuth).toBeCalled()
   //  expect(facebookAuth).toBeCalledWith('0626942458','abc1234')
//} )
 
 test('Call signInWithFacebook with valid credential should pass', () => {
    const facebookAuth = jest.fn('0817777788', 'abc12345')
        .mockReturnValue({ name: 'Weera', facebookId: '1234567890', email: 'wkasetsin@gmail.com'})

    let app = new MyAuth(facebookAuth)
    let phone = '0817777788'
    let password = 'abc12345'
    let value = app.signInWithFacebook(phone, password)

     expect(value).toEqual({ name: 'Weera', facebookId: '1234567890', email: 'wkasetsin@gmail.com'})
     expect(facebookAuth).toBeCalled()
     


    
    
 })