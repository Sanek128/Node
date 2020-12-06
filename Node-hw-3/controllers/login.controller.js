// module.exports = {

//     getLogin: (req, res) => {
//         res.render('login', { layout: false });
//     },

//     postLogin: ((req, res) => {
    
//         const { email, password } = req.body;
    
//         fs.readFile(usersArr, (err, data) => {
            
//             if (err) {
//                 res.render('error');
//                 return;
//             }
    
//             const users = JSON.parse(data.toString());
//             const checkEmail = users.find(user => user.email === email && user.password === password);
    
//             if (!checkEmail) {
//                 res.redirect('/error');
//                 return;
//             }
    
//             isLogined = true;
//             res.redirect('/users');
//         })
//     })
// }