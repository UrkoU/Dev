using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
public class Blog_Etiqueta
{
    [Key, Column(Order = 0)]
    public int BlogId { get; set; }
    [Key, Column(Order = 1)]
    public int EtiquetaId { get; set; }

    public Blog Blog { get; set; }
    public Etiqueta Etiqueta { get; set; }

    public override string ToString() => $"{BlogId}x{EtiquetaId}";
}