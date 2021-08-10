const getSleepHours = day => {
    if(day === 'monday'){
      return 8;
    }else if(day === 'tuesday'){
      return 6;
    }else if(day === 'wednesday'){
      return 6;
    }
    else if(day === 'thursday'){
      return 7;
    }
    else if(day === 'friday'){
      return 6;
    }
    else if(day === 'saturday'){
      return 8;
    }
    else{
      return 9;
    }
  }
  
  const getActualSleepHours = () =>  8 + 6 + 6 + 7 + 6 + 8 + 9;
  
  const getIdealSleepHours = idealHours => idealHours * 7;
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours(10);
  
    if(actualSleepHours === idealSleepHours){
      console.log('You got the perfect amount of sleep');
      console.log('You have the ideal sleep hours');
    }
    else if(actualSleepHours > idealSleepHours){
      console.log('You got more sleep than needed');
      console.log(`You are over ${actualSleepHours - idealSleepHours} of your ideal sleep hours`);
    }
    else {
      console.log('You should get some rest');
      console.log(`You are under ${idealSleepHours -  actualSleepHours} of your ideal sleep hours`);
    }
  }
  calculateSleepDebt();