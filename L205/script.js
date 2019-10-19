let primeNumbers = '';

      for(let number = 2; number < 20; number++) {
        let isPrime = true;
        for(let devisor = 2; devisor <= Math.sqrt(number); devisor++) {
          if(number % devisor == 0) {
            isPrime = false;
            break;
          }
        }
        if(isPrime == true)
          primeNumbers += number + ' ';
      }

      alert(primeNumbers);