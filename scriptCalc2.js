function getPrice() {
    return {
      types: [380, 20, 30],
      selectOptions: {
        selectOption1: 99,
        selectOption2: 119,
        selectOption3: 139,
      },
      selectedCheckbox: {
        checkboxOption1: 59,
        checkboxOption2: 49,
      }
    };
  }
  function updatePrice(event) {
    let mainSelect = document.getElementsByName("radio-type");
    let Finalprice = 0;
    let ArrPrices = getPrice();
    let currentId;
    let count = document.getElementById("ammount2").value;
    
    //Прибавляем главную цену
    mainSelect.forEach(function(mainSelect) {
        if (mainSelect.checked) {
          let optionPrice = ArrPrices.types[mainSelect.value];
          currentId = mainSelect.value;
          if (optionPrice !== undefined) {
            Finalprice += optionPrice;
          }
        }
      });
     

    
    //Регуляция display fieldSelect
    let selectDiv = document.getElementById("fieldSelect");
    if(currentId == "1") selectDiv.style.display = "block";
    else selectDiv.style.display = "none";
   
    //Проходимся по fieldSelect
    let prodOptions = Array.from(document.querySelectorAll("#selectOptions option"));
    
    if(currentId == 1)
    {
        prodOptions.forEach(function(option) 
        {
            if(option.selected)
            {
                Finalprice +=  ArrPrices.selectOptions[option.value]; 
            }
        });
        
    }
     
    // Регуляция display checkboxedSelect 
    let checkDiv = document.getElementById("checkboxedSelect");
    if(currentId == 2) checkDiv.style.display ="block";
    else checkDiv.style.display = "none";
   
    // Смотрим какие товарные свойства выбраны.
    let checkboxes = document.querySelectorAll("#checkboxedSelect input");
    if(currentId == 2)
    {
        checkboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
              let propPrice = ArrPrices.selectedCheckbox[checkbox.value];
              if (propPrice !== undefined) {
                Finalprice += propPrice;
              }
            }
          });
    }

    
    let prodPrice = document.getElementById("calc2-answer");
    if(count > 0)
    {
        prodPrice.innerHTML = "Цена: " + (count*Finalprice) + " рублей";
    }
    else
    {
        prodPrice.innerHTML = "";
    }
  }


  window.addEventListener('DOMContentLoaded', function (event) {

    let selectDiv = document.getElementById("fieldSelect");
    selectDiv.style.display = "none";
    let checkDiv = document.getElementById("checkboxedSelect");
    checkDiv.style.display = "none";

    let count = document.getElementById("ammount2");
    count.addEventListener("keyup", function(event)
    {
        updatePrice(event);
    })
    
    // Находим select по имени в DOM.
    let s = document.getElementsByName("radio-type");
    s.forEach(function(select)
    {
        select.addEventListener("change", function(event) {
            let target = event.target;
            console.log(target.value);
            event.preventDefault();
            updatePrice(event);
          });
    });
    // Назначаем обработчик на изменение select.
    
    
    // Назначаем обработчик радиокнопок.  
    let selects = document.getElementsByName("select");
    selects.forEach(function(selects) {
      selects.addEventListener("change", function(event) {
        let r = event.target;
        console.log(r.value);
        event.preventDefault();
        updatePrice(event);
      });
    });
  
      // Назначаем обработчик радиокнопок.  
    let checkboxes = document.querySelectorAll("#checkboxedSelect input");
    checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener("change", function(event) {
        let c = event.target;
        console.log(c.name);
        console.log(c.value);
        event.preventDefault();
        updatePrice(event);
      });
    });
    event.preventDefault();
    updatePrice(event);
  });
