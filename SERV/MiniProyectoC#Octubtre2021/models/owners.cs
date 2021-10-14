namespace ProjectSystem
{
    public class Owner
    {
        int Id;
        string Name;
        char Genre;

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
    }
}