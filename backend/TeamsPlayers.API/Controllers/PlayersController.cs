using Microsoft.AspNetCore.Mvc;
using SurrealDb.Net;
using TeamsPlayers.API.Models;

namespace TeamsPlayers.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PlayersController : ControllerBase
{
    private readonly ISurrealDbClient _dbClient;
    private const string Table = "player";

    public PlayersController(ISurrealDbClient dbClient)
    {
        _dbClient = dbClient;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var players = await _dbClient.Select<Player>(Table);
        return Ok(players);
    }

    [HttpPost]
    public async Task<IActionResult> Create(Player player)
    {
        var created = await _dbClient.Create(Table, player);
        return Ok(created);
    }
}
