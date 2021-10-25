using System.Globalization;
namespace Negocio.Modelos
{
    public class Pet
    {
        public string Name;
        public string Type;
        public int Owner;
        // public Pet(string name, string type, int owner)
        // {
        //     Name = name;
        //     Type = type;
        //     Owner = owner;
        // }

        public override string ToString() => $"({Name}, {Type}, {Owner})";
        public static Pet ParseRow(string row)
        {
            NumberFormatInfo nfi = new CultureInfo("en-US", false).NumberFormat;

            //Console.WriteLine(row);
            var columns = row.Split(',');
            return new Pet{Name = columns[0], Type = columns[1], Owner = int.Parse(columns[2])};
        }
    }
}