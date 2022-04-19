const PatientModel = require("../model/form.model")


const getForm = (req, res) => {
    res.render("form")
}

const welcomePage = (req, res) => {
    res.render("welcome")
}


const createPatient = async (req, res ) => {
    try{
        const { name } = req.body;
        // console.log("request body -> ",req.body);
        const newPatient = new PatientModel(req.body);
        // console.log("new patient record -> ",newPatient);
        const createdPatient = await newPatient.save();
        // console.log("paient created -> ",createdPatient);
        // return res.send(createdPatient)
      
        
        return res.render("welcome",{
            name : name ,
            message : "Your details are added successfully"
        })
   
    }catch(err){
        return res.send(err)
    }
}




module.exports = { createPatient,getForm,welcomePage }


// echo "# node_vac_prac" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/synergy2411/node_vac_prac.git
// git push -u origin main