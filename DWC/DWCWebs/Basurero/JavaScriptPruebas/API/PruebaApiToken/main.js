jwt = 'eyJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJtZXQwMS5hcGlrZXkiLCJpc3MiOiJJRVMgUExBSUFVTkRJIEJISSBJUlVOIiwiZXhwIjoyMjM4MTMxMDAyLCJ2ZXJzaW9uIjoiMS4wLjAiLCJpYXQiOjE2Mzk3NDc5MDcsImVtYWlsIjoidGljc0BwbGFpYXVuZGkuY29tIn0.PejDLd3Rebw21RCkO3gw2Sz2SGyTW1FNIRBDzllfkPU5pEyaRhKlzMZAMolirsViiwbuMKU4WL8nuX9-CWBQgO75urgz1WZGw_5YgKCiBHe0eT77Lzr0fXdDcyhWgle9QxtUmjZ2WKTvnRgv3vHZuoMf7sRi0E9f8XGHljAopmHz1R5TQN_QXKKkNzCX6kWRR81VbcVzBHj6Gw_c-4UMh-TIZoZbv9aU5uDw7ECWngmvEpfAryM_KQE2IhGRDqcrqVXa3-iDVVKEgIxVqH-plxL1T-eBm9jO7id8oSsnpdiYSmMz_EVYJD4f4nGeZGXvTjzGJwM1jhimLiDoE9-m_A';
    $.ajax({
      type: "GET",
      dataType: "html",
      url: 'https://api.euskadi.eus/euskalmet/stations',
      headers: {
        "accept": "application/json",
        "Authorization": "Bearer " + jwt
      }

    }).done(function (response) {
      console.log("response: " + response);
      aDatos = JSON.parse(response);
      console.log(JSON.parse(response));
      Estaciones = new Set()
      aDatos.forEach(item => { Estaciones.add(item.stationId) });
      sEstaciones = "";
      aEstaciones=[];
      i=0;
      Estaciones.forEach((item) => { aEstaciones [i++]={id:item} })
      //en aEstaciones tenemos un JSON con los IDs de las estaciones
    }).fail(function (err) {
      console.log("error");
      console.log(err);
    });