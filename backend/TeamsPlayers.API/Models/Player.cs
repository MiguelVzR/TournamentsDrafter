using System.Text.Json.Serialization;
using SurrealDb.Net.Models;

namespace TeamsPlayers.API.Models;

public class Player : Record
{
    public string Name { get; set; } = string.Empty;
    public string Position { get; set; } = string.Empty;
    public string TeamId { get; set; } = string.Empty;
}
