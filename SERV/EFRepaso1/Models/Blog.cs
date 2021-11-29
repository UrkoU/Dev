using System.Collections.Generic;

public class Blog
{
    public int BlogId { get; set; }
    public string Url { get; set; }
    public List<Blog_Etiqueta> Etiquetaciones { get; } = new List<Blog_Etiqueta>();

    public override string ToString() => $"{BlogId}: {Url} ({Etiquetaciones.Count} Posts)";

}