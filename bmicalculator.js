function calculate(){
    const height=parseInt(document.getElementById("height-data").value)
    const weight=parseInt(document.getElementById("weight-data").value)
    const Result=document.getElementById("result")
    let height_status=false;
    let weight_status=false;
    if(height===' ' ||isNaN(height)||(height<=0)){
        document.getElementById("height_error").innerHTML="Please enter a valid Height"
    }
    else{
        document.getElementById("height_error").innerHTML=' '
        height_status=true
    }
     if(weight===' ' ||isNaN(weight)||(weight<=0)){
        document.getElementById("weight_error").innerHTML="Please enter a valid Height"
    }
    else{
        document.getElementById("weight_error").innerHTML=' '
        weight_status=true
    }

    if(height_status && weight_status){
         const bmi=((weight)/((height*height)/1000)).toFixed()
         if(bmi<16){
            Result.innerHTML='Severe Thinness'+'   ' + bmi +'Kg/m2'
         }
         if(bmi>=16&&bmi<17){
            Result.innerHTML='Moderate Thinness'+'  '+bmi +'Kg/m2'
         }
         if(bmi>=17&&bmi<18.5){
            Result.innerHTML='Mild Thinness'+'  '+bmi +'Kg/m2'
         }
         if(bmi>=18.5&&bmi<25){
            Result.innerHTML='Normal'+'  '+bmi +'Kg/m2'
         }
         if(bmi>=25&&bmi<30){
            Result.innerHTML='overweight'+'  '+bmi +'Kg/m2'
         }
         if(bmi>=30&&bmi<35){
            Result.innerHTML='obese Class l'+'  '+bmi +'Kg/m2'
         }
         if(bmi>=35&&bmi<40){
            Result.innerHTML='obese Class ll'+'  '+bmi +'Kg/m2'
         }
         if(bmi>=40){
            Result.innerHTML='obese Class lll'+'  '+bmi +'Kg/m2'
         }
    }

}
