const express = require('express')
const { seasons, episodes } = require('./bleach')
const app = express()
const PORT = process.env.PORT || 7200

const manifest = {
  id: 'com.bleach.drive',
  version: '1.0.0',
  name: 'Bleach Drive',
  logo: 'https://raw.githubusercontent.com/xami666999-lgtm/bleach-drive/main/covers/bleach-kai.jpg',
  description: 'Bleach Kai from Google Drive. Substitute Soul Reaper, Soul Society, Arrancar, Hueco Mundo, Turn Back the Pendulum, Battle of Karakura, Fullbring.',
  resources: ['catalog', 'meta', 'stream'],
  types: ['series'],
  catalogs: [
    { type: 'series', id: 'bleach', name: 'Bleach', extra: [{ name: 'search', isRequired: false }] },
  ],
  idPrefixes: ['bleach'],
}

app.use((req, res, next) => { res.set('Access-Control-Allow-Origin', '*'); next() })

app.get('/manifest.json', (_req, res) => res.json(manifest))

const POSTER = 'https://raw.githubusercontent.com/xami666999-lgtm/bleach-drive/main/covers/bleach-kai.jpg'
const DESC = 'Bleach Kai. A tighter cut of the series covering Substitute Soul Reaper, Soul Society, Arrancar, Hueco Mundo, Turn Back the Pendulum, the Battle of Karakura, and Fullbring.'

app.get('/catalog/series/bleach.json', (req, res) => {
  res.json({ metas: [{ id: 'bleach', type: 'series', name: 'Bleach Kai', poster: POSTER, description: DESC }] })
})

app.get('/meta/series/:id.json', (req, res) => {
  const videos = []
  let n = 1
  const seasonNum = { s1: 1, s2: 2, s3: 3, s4: 4, s5: 5, s6: 6, s7: 7, bonus: 8 }
  const seasonName = { s1: 'Substitute Soul Reaper', s2: 'Soul Society', s3: 'Arrancar', s4: 'Hueco Mundo', s5: 'Turn Back the Pendulum', s6: 'Battle of Karakura', s7: 'Fullbring', bonus: 'Bonus' }
  for (const sid of Object.keys(episodes)) {
    for (const e of episodes[sid]) {
      videos.push({
        id: 'bleach:' + sid + ':' + e[0],
        title: (seasonName[sid] || sid) + ' - ' + e[1],
        season: seasonNum[sid] || 1,
        episode: n++,
        overview: e[3] || '',
      })
    }
  }
  res.json({ meta: { id: 'bleach', type: 'series', name: 'Bleach Kai', poster: POSTER, description: DESC, videos } })
})

function base(req) {
  const host = req.get('host')
  const proto = (req.headers['x-forwarded-proto'] || 'https').split(',')[0]
  return proto + '://' + host
}

app.get('/stream/series/:id.json', (req, res) => {
  const parts = req.params.id.split(':')
  if (parts[0] !== 'bleach') return res.json({ streams: [] })
  const ep = (episodes[parts[1]] || []).find((e) => e[0] === parts[2])
  if (!ep) return res.json({ streams: [] })
  res.json({ streams: [{ name: 'Bleach', title: ep[1], url: base(req) + '/play/' + ep[2] }] })
})

app.get('/play/:fileId', async (req, res) => {
  try {
    const id = req.params.fileId
    const warn = await fetch('https://drive.google.com/uc?export=download&id=' + id, {
      headers: { 'User-Agent': 'Mozilla/5.0' },
    })
    const html = await warn.text()
    const uuid = (html.match(/name="uuid" value="([^"]+)"/) || [])[1] || ''
    const url = 'https://drive.usercontent.google.com/download?id=' + id + '&export=download&confirm=t' + (uuid ? '&uuid=' + uuid : '')
    const r = await fetch(url, { redirect: 'follow', headers: { 'User-Agent': 'Mozilla/5.0' } })
    const disp = r.headers.get('content-disposition') || ''
    const name = (disp.match(/filename="([^"]+)"/) || [])[1] || ''
    const type = /\.mkv/i.test(name) ? 'video/x-matroska' : /\.mp4|\.m4v/i.test(name) ? 'video/mp4' : (r.headers.get('content-type') || 'video/mp4')
    res.set('Content-Type', type)
    res.set('Accept-Ranges', 'bytes')
    if (r.headers.get('content-length')) res.set('Content-Length', r.headers.get('content-length'))
    const { Readable } = require('stream')
    Readable.fromWeb(r.body).pipe(res)
  } catch (err) {
    res.status(502).send('stream failed')
  }
})

app.get('/', (_req, res) => res.redirect('/manifest.json'))
app.listen(PORT, () => console.log('Bleach Drive addon on', PORT))
