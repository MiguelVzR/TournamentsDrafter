using System.Text.Json.Serialization;
using SurrealDb.Net.Models;

namespace TeamsPlayers.API.Models;

public class Team : Record
{
    public string Name { get; set; } = string.Empty;
    public string Country { get; set; } = string.Empty;
}
