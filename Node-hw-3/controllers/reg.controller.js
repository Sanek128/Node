// module.exports = {

//     getReg: (req, res) => {
//         res.render('reg', { layout: false });
//     },

//     postReg: ((req, res) => {
//         const { name, email, password } = req.body;
        
//         fs.readFile(usersArr, ((err, data) => {
//             if (err) {
//                 res.render('error');
//                 return;
//             }
            
//             const users = JSON.parse(data.toString());
//             const checkEmail = users.find(user => user.email === email);
            
//             if (checkEmail) {
//                 res.redirect('/error');
//                 return;
//             }
//             users.push(req.body);
//             fs.writeFile(usersArr, JSON.stringify(users), err => {
//                 if (err) {
//                     res.render('error');
//                     return;
//                 }
//             });
            
//             isLogged = true;
//             res.redirect('/users');
//         }));
//     })
// }