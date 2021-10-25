namespace UI
{
public class PetMV
    {
        public string Name;
        public string Type;
        public string Owner;

        // Comillas escapadas
        public override string ToString() => $"\"{Name}\" es un {Type} de {Owner}";
    }
}