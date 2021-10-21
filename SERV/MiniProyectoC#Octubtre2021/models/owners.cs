
using System.Globalization;
namespace Negocio.Modelos
{
    public class Owner
    {
        public int Id;
        public string Name;
        public char Genre;

        public Owner(int id, string name, char genre)
        {
            Id = id;
            Name = name;
            Genre = genre;
        }

        public override string ToString()
        {
            return $"({Id}, {Name}, {Genre})";
        }

        public static Owner ParseRow(string row)
        {
            NumberFormatInfo nfi = new CultureInfo("en-US", false).NumberFormat;

            //Console.WriteLine(row);
            var columns = row.Split(',');
            return new Owner(int.Parse(columns[0]), columns[1], columns[2][0]);
        }
    }
}