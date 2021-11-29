using System.Collections.Generic;
public class Etiqueta
{
    public int EtiquetaId { get; set; }
    public string Nombre { get; set; }

    public List<Blog_Etiqueta> BlogsEtiquetados { get; } = new List<Blog_Etiqueta>();

    public override string ToString() => $"{EtiquetaId}: {Nombre} ";

}