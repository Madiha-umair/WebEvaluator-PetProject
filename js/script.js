/* PET PROJECT - WEB EVALUATOR */
//This tells JS to "listen" for the onload event and call the page load function when that event occur.
window.onload = processForms;

//REGEX Declairation: This means only numbers from 1 to 5 can be given as input.
var NumberRange = /^[1-5]$/;
//REGEX Declairation: This means only upper and lower case alphabets can be given as input for names.
var LetterRange = /^[A-Za-z]+$/;
//REGEX Declairation: This means only takes input for URL starting with http,www, https: and following with letters.
var URLRange = /(www|http:|https:)+[^\s]+[\w]/;
var Total;
var Result;
var rev= document.getElementById("reviews");

//after page has finished loading, this will execute
function processForms(){
   
    var formHandle1=document.forms.personal_information;
    //Calling a Form Validation Function "PersonalInformationForm", when form submit button click!
    formHandle1.onsubmit= PersonalInformationForm;
    //Accessing elements by "name" through the formHandle we created
    var fnameValue= formHandle1.fName;
    var lnameValue= formHandle1.lName;

    //Form Validation Function
    function PersonalInformationForm(){
        
        //First Name Validation: Checking for the condition of an empty string
        if (!LetterRange.test(fnameValue.value)){

            // if user does not make a selection for a form field, an error message will generate with red background color!
            ErrfName.style.background="red";
            ErrfName.style.color="white";
            ErrfName.innerHTML= "*Please enter your first name in letters only!";
            // and the field will recieve focus.
            fnameValue.focus();
            return false;
        }
         //Last Name Validation
        else if (!LetterRange.test(lnameValue.value)){
            ErrlName.style.background="red";
            ErrlName.style.color="white";
            ErrlName.innerHTML= "*Please enter your last name in letters only!";
            lnameValue.focus();
            return false;
        }
        else{
            formHandle1.style.display="none";
            main.style.display="none";
            form2.style.display="block";   
        }
        return false;
    }//person information Form submitted after validation
    
    var formHandle2=document.forms.ReviewForm;
    //Calling a Form Validation Function "reviewFunc", when form submit button click!
    formHandle2.onsubmit= reviewFunc;

    //Accessing elements by "name" through the formHandle we created
    var snameValue= formHandle2.sName;
    var urlValue= formHandle2.urlName;
    var vdesignValue= formHandle2.vdesign;
    var responseValue= formHandle2.response;
    var navigateValue= formHandle2.navigate;
    var accessibleValue= formHandle2.accessible;
    var loadingValue= formHandle2.loading;
    var contentValue= formHandle2.content;

    //Function definition of "reviewFunc" 
    function reviewFunc(){
        //Site Name Validation
         if (snameValue.value===""){
            ErrsName.style.background="red";
            ErrsName.style.color="white";
            ErrsName.innerHTML= "*Please enter your site name!";
            snameValue.focus();
            return false;
        }
        //URL Validation
        else if (!URLRange.test(urlValue.value)){
            ErrUrlName.style.background="red";
            ErrUrlName.style.color="white";
            ErrUrlName.innerHTML= "*Please enter the site URL!";
            urlValue.focus();
            return false;
        }
        //Visual Design Value Validation
        else if (!NumberRange.test(vdesignValue.value)){ 
            ErrDesign.style.background="red";
            ErrDesign.style.color="white";
            ErrDesign.innerHTML= "Please enter your rating between 0-5";
            vdesignValue.focus();
            return false;
        }
        //Responsiveness Value Validation
        else if (!NumberRange.test(responseValue.value)){
            ErrResponse.style.background="red";
            ErrResponse.style.color="white";
            ErrResponse.innerHTML= "Please enter your rating between 0-5";
            responseValue.focus();
            return false;
        }
        //Easy to Navigate Value Validation
        else if (!NumberRange.test(navigateValue.value)){
            ErrNav.style.background="red";
            ErrNav.style.color="white";
            ErrNav.innerHTML= "Please enter your rating between 0-5";
            navigateValue.focus();
            return false;
        }
        //Accessible Value Validation
        else if (!NumberRange.test(accessibleValue.value)){
            ErrAccess.style.background="red";
            ErrAccess.style.color="white";
            ErrAccess.innerHTML= "Please enter your rating between 0-5";
            accessibleValue.focus();
            return false;
        }
        //Loading Time Validation
        else if (!NumberRange.test(loadingValue.value)){
            ErrLoad.style.background="red";
            ErrLoad.style.color="white";
            ErrLoad.innerHTML= "Please enter your rating between 0-5";
            loadingValue.focus();
            return false;
        }
        //Content Value Validation
        else if (!NumberRange.test(contentValue.value)){
            ErrContent.style.background="red";
            ErrContent.style.color="white";
            ErrContent.innerHTML= "Please enter your rating between 0-5";
            contentValue.focus();
            return false;
        }
        else{
             footer.style.display="block";
            ReviewForm.style.display="none";
        }

        Total  = parseInt(vdesignValue.value)+ parseInt(responseValue.value) +parseInt(navigateValue.value)+ parseInt(accessibleValue.value)+ parseInt(loadingValue.value)+ parseInt(contentValue.value);
        Result = Math.round((Total/30)*5);
        //Showing Output:  Upon submitting the form, the user will see a confirmation message with the following dynamically assigned values
        fname.innerHTML= fnameValue.value;
        lname.innerHTML=lnameValue.value;
        firstname.innerHTML= fnameValue.value;
        lastname.innerHTML=lnameValue.value;
        nameOfSite.innerHTML=snameValue.value ;
        siteUrl.innerHTML=urlValue.value ;

        //To print the star as a result ,setting the value of Result equal to number of star
        for(var  i=0; i<=Result; i++)
        {if(i===1)
        {var star="⭐";}
        else if(i===2)
        {star="⭐⭐";}
        else if(i===3)
        {star="⭐⭐⭐";}
        else if(i===4)
        {star="⭐⭐⭐⭐";}
        else if(i===5)
        {star="⭐⭐⭐⭐⭐";}
        }
        noOfStar.innerHTML=star;  
    
        //Hiding The Form: Upon submitting the form, the header and form disappear!!
        formHandle2.style.display="none";
        return false;
    }
}