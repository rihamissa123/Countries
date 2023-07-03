//alert('Youssef')
//console.log('Rony')
// This is how JS will call an API and Print in the console the result
//  this is how JS REQUESTs a certain API / URL to retrun
fetch('https://restcountries.com/v3.1/all') // <<-- End-Point
        .then(response => response.json())
        .then(json => {
            let countries = document.getElementById('countries');
            let AllCountries = document.getElementById('AllCountries');
            let flags = document.getElementById('flags');
            json.forEach(country => {
                console.log(country);
                
                // let MyLi = document.createElement('li');
                // MyLi.innerHTML = country.name.common;
                // countries.appendChild(MyLi);

                let option = document.createElement('option');
                option.innerHTML = country.name.common;
                AllCountries.appendChild(option);

                let MyImg = document.createElement('img');
                MyImg.src= country.flags.png;
                //Attach click event on the image , addEventListener    

                MyImg.addEventListener('click', () => {
                    const message = `Country: ${country.name.common}\n`;
                    alert(message);
                  });
                        
                flags.appendChild(MyImg);
            });
        })
     