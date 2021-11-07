// for submit
document.getElementById('loan-form').addEventListener('submit',function(e){
    //hide results
    document.getElementById('results').style.display='none';

    //show loader
    document.getElementById('loading').style.display='block';

    setTimeout(calculateResults,2000);

    e.preventDefault();
});

//calculate reults
function calculateResults(){
   // UI vars
   const amount=document.getElementById('amount');
   const interest=document.getElementById('interest');
   const years=document.getElementById('years');

   const monthlyPayment=document.getElementById('monthly-payment');
   const totalPayment=document.getElementById('total-payment'); 
   const totalInterest=document.getElementById('total-interest');

   const principal= parseFloat(amount.value);
   const calculatedInterest= parseFloat(interest.value) /100 /12 ;
   const calculatedPayments=parseFloat(years.value)*12;

    //monthly payment
   const a= Math.pow(1+calculatedInterest,calculatedPayments) ;
   const monthly=(principal*a*calculatedInterest)/(a-1);

    if(isFinite(monthly)){
        monthlyPayment.value=monthly.toFixed(2);
        totalPayment.value=(monthly * calculatedPayments).toFixed(2);
        totalInterest.value=((monthly * calculatedPayments)-principal).toFixed(2);  

        //show results
        document.getElementById('results').style.display='block';

        //hide loader
        document.getElementById('loading').style.display='none';
    }
    else{
        showError('Please check your numbers')
    }

    
}
//for Error 
function showError(error){
   //Hide results
   document.getElementById('results').style.display='none';

   //Hide Loader
   document.getElementById('loading').style.display='none';
   
    //get element
    const card=document.querySelector('.card');

    const heading=document.querySelector('.heading')
       
    //create a div and class to it
    
    const errorDiv=document.createElement('div');
    errorDiv.className='alert alert-danger';
    
    //create a Text Node
    errorDiv.appendChild(document.createTextNode(error));
    
    //insert error above heading
    card.insertBefore(errorDiv ,heading);

    //clear error after 2 sec
    setTimeout(clearError,2000);
    }

    function clearError(){
        document.querySelector('.alert').remove();
    }