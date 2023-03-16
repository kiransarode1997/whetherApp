class Fetch {
    async getCurrent(input) {
      const myKey = "b64064cb0a1b8449744a936231a7252f";
 
      //make request to url
 
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
      );
 
      const data = await response.json();
 
      console.log(data);
 
      return data;
    }
  }