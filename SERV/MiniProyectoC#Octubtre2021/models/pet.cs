namespace ProjectSystem
{
    public class Pet
    {
        string Name;
        string Type;
        int Owner;
        public Pet(string name, string type, int owner)
        {
            Name = name;
            Type = type;
            Owner = owner;
        }

        public override string ToString() => $"({Name}, {Type}, {Owner})";
    }
}