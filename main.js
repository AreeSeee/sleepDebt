function getSleepHours(day){
    //change actual sleep hours here
    switch (day){
      case 'monday':
      return 8;
      break;
       case 'tuesday':
      return 8;
      break;
       case 'wednesday':
      return 8;
      break;
       case 'thursday':
      return 8;
      break;
       case 'friday':
      return 8;
      break;
       case 'saturday':
      return 8;
      break;
       case 'sunday':
      return 8;
      break;
    }
  }
  function getActualSleepHours(){
   return getSleepHours('monday')+ getSleepHours('tuesday')+getSleepHours('wednesday')+ getSleepHours('thursday')+getSleepHours('friday')+ getSleepHours('saturday')+getSleepHours('sunday');
  }
  function getIdealSleepHours(){
    //change ideal sleep hours here
    let x=10;
    x*=7;
    console.log(x);
    return x;
    
  }
  function sleepDebt(){
    let y= getActualSleepHours();
    let z = getIdealSleepHours();
    if(y===z){
      console.log('you sleep ideally');
    }else if(y>z){
      console.log('no additional sleep required');
      let a = y-z;
      console.log(`you sleep ${a} hours over`);
  
    }
    else if(z>y){
      console.log('you are short of sleep');
      let b = z-y;
      console.log(`your sleep is ${b} hours short`);
    }
  
  }
  sleepDebt();
   
    
  
   
  
  
  
  