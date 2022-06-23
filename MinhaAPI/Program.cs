var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => {
    return Results.Ok("Hello world Carlos1");
});


app.MapGet("/{nome}", (string nome) => {
    return Results.Ok($"Hello world {nome}");
});

app.MapPost("/", (User user) =>
{
    return Results.Ok(user);
});


app.Run();

void Teste(){

}
public class User {
    public int Id { get; set; }
    public string Username { get; set; }
}