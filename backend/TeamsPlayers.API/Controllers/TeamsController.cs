using Microsoft.AspNetCore.Mvc;
using SurrealDb.Net;
using TeamsPlayers.API.Models;

namespace TeamsPlayers.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TeamsController : ControllerBase
{
    private readonly ISurrealDbClient _dbClient;
    private const string Table = "team";

    public TeamsController(ISurrealDbClient dbClient)
    {
        _dbClient = dbClient;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var teams = await _dbClient.Select<Team>(Table);
        return Ok(teams);
    }

    [HttpPost]
    public async Task<IActionResult> Create(Team team)
    {
        var created = await _dbClient.Create(Table, team);
        return Ok(created);
    }
}
