using System;
using System.Net.Http;
using System.Net.Http.Headers;
using NW = Newtonsoft.Json;
using MS = System.Text.Json;
using System.Collections.Generic;

using var client = new HttpClient();

client.DefaultRequestHeaders.Add("User-Agent", "mi consola");
client.DefaultRequestHeaders.Accept.Add(
        new MediaTypeWithQualityHeaderValue("application/json"));

// var url = "https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/440?format=json";
// var url = "https://randomuser.me/api/?nat=es";
var url = "https://randomuser.me/api/?nat=es&&page=3&results=10&seed=abc";

HttpResponseMessage response = await client.GetAsync(url);
response.EnsureSuccessStatusCode();
var resp = await response.Content.ReadAsStringAsync();

Root root = MS.JsonSerializer.Deserialize<Root>(resp);
foreach (var item in root.results)
{
    Console.WriteLine($" {item.name.first}");
}

Console.WriteLine("====");

dynamic jsonObject = NW.JsonConvert.DeserializeObject(resp);
// Console.WriteLine(jsonObject.Count);
// Console.WriteLine(jsonObject.Message);
// Console.WriteLine(jsonObject.SearchCriteria);

// foreach (var item in jsonObject.Productos)
// {
//     // Console.WriteLine(item.Make_ID);
//     // Console.WriteLine(item["Model_Name"]);
//     // Console.WriteLine(item.GetType());
//     //Console.WriteLine(MS.JsonSerializer.Serialize(item));
//     // Console.WriteLine(NW.JsonConvert.SerializeObject(item));
// }


//record Data(string user, short valor);
public class Coche
{
    public int Make_ID { get; set; }
    public string Make_Name { get; set; }
    public int Model_ID { get; set; }
    public string Model_Name { get; set; }

    public override string ToString() => $"{Make_ID} {Make_Name} {Model_ID} {Model_Name}";
}

// public class Result
// {
//     public int Count { get; set; }
//     public string Message { get; set; }
//     public string SearchCriteria { get; set; }
//     public List<Coche> Results { get; set; }
// }

public class ProductColor
{
    public string hex_value { get; set; }
    public string colour_name { get; set; }
}

public class Productos
{
    public int id { get; set; }
    public string brand { get; set; }
    public string name { get; set; }
    public string price { get; set; }
    public object price_sign { get; set; }
    public object currency { get; set; }
    public string image_link { get; set; }
    public string product_link { get; set; }
    public string website_link { get; set; }
    public string description { get; set; }
    public double? rating { get; set; }
    public string category { get; set; }
    public string product_type { get; set; }
    public List<object> tag_list { get; set; }
    public DateTime created_at { get; set; }
    public DateTime updated_at { get; set; }
    public string product_api_url { get; set; }
    public string api_featured_image { get; set; }
    public List<ProductColor> product_colors { get; set; }
}

// Root myDeserializedClass = JsonConvert.DeserializeObject<Root>(myJsonResponse); 
public class Name
{
    public string title { get; set; }
    public string first { get; set; }
    public string last { get; set; }
}

public class Street
{
    public int number { get; set; }
    public string name { get; set; }
}

public class Coordinates
{
    public string latitude { get; set; }
    public string longitude { get; set; }
}

public class Timezone
{
    public string offset { get; set; }
    public string description { get; set; }
}

public class Location
{
    public Street street { get; set; }
    public string city { get; set; }
    public string state { get; set; }
    public string country { get; set; }
    public int postcode { get; set; }
    public Coordinates coordinates { get; set; }
    public Timezone timezone { get; set; }
}

public class Login
{
    public string uuid { get; set; }
    public string username { get; set; }
    public string password { get; set; }
    public string salt { get; set; }
    public string md5 { get; set; }
    public string sha1 { get; set; }
    public string sha256 { get; set; }
}

public class Dob
{
    public DateTime date { get; set; }
    public int age { get; set; }
}

public class Registered
{
    public DateTime date { get; set; }
    public int age { get; set; }
}

public class Id
{
    public string name { get; set; }
    public string value { get; set; }
}

public class Picture
{
    public string large { get; set; }
    public string medium { get; set; }
    public string thumbnail { get; set; }
}

public class Result
{
    public string gender { get; set; }
    public Name name { get; set; }
    public Location location { get; set; }
    public string email { get; set; }
    public Login login { get; set; }
    public Dob dob { get; set; }
    public Registered registered { get; set; }
    public string phone { get; set; }
    public string cell { get; set; }
    public Id id { get; set; }
    public Picture picture { get; set; }
    public string nat { get; set; }
}

public class Info
{
    public string seed { get; set; }
    public int results { get; set; }
    public int page { get; set; }
    public string version { get; set; }
}

public class Root
{
    public List<Result> results { get; set; }
    public Info info { get; set; }
}