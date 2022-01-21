import { buildings } from '../../cache/data'

const search = (req, res) => {
  const results = req.query.q ?
    buildings.filter(building => building.name.toLowerCase().includes(req.query.q)
      || building.code.toLowerCase().includes(req.query.q)
      || (building.abrev && building.abrev.toLowerCase().includes(req.query.q))
    ).slice(0,9)
    : []
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ results }))
}

export default search