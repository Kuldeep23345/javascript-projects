 let input = document.querySelector("#input-field");
      let inputRange = document.querySelector("#range-input");
      let lengthLabel = document.querySelector("#length-label");
      let numInput = document.querySelector("#check-num");
      let charInput = document.querySelector("#check-char");
      inputRange.addEventListener("input", () => {
        lengthLabel.innerHTML = `Length:${inputRange.value}`;
        generatePassword();
      });
      function generatePassword() {
        let length = parseInt(inputRange.value);
        let password = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (numInput.checked) {
          str += "0123456789";
        }
        if (charInput.checked) {
          str += "@#&**({}+-_>?)";
        }
        for (let i = 1; i < length; i++) {
          password += str.charAt(Math.floor(Math.random() * str.length));
        }
        input.value = password;
      }
      document.querySelector("#copy-btn").addEventListener("click", () => {
        input.select();
        document.execCommand("copy");
      });

      generatePassword();