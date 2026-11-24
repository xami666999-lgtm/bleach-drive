const seasons = [
  { id: 's1', name: 'Substitute Soul Reaper' },
  { id: 's2', name: 'Soul Society' },
  { id: 's3', name: 'Arrancar' },
  { id: 's4', name: 'Hueco Mundo' },
  { id: 's5', name: 'Turn Back the Pendulum' },
  { id: 's6', name: 'Battle of Karakura' },
  { id: 's7', name: 'Fullbring' },
  { id: 'bonus', name: 'Bonus' },
]

const episodes = {
  s1: [
    ['1', 'Soul Reaper', '11zm6QYki2dnEVSIc93tzMXsGaP-GPmWV', 'Shinigami remplaçant'],
    ['2', 'Mod Soul', '1Nr8yrriKuJrOV0PuZDLbD83psBe-368x', 'Shinigami remplaçant'],
    ['3', 'Quincy', '1knFwxQmLcNrkMY02ob4vv9paXY33xbkg', 'Shinigami remplaçant'],
    ['4', 'The Encounter', '144UYLvzxIesKwCKkySMZZZEVFct9ujib', 'Shinigami remplaçant'],
  ],
  s2: [
    ['5', 'Soul Society', '1IiR_s5Z7xXcO3tp6HNDO-ILEkAGLMipx', 'Soul Society'],
    ['6', 'Ryoka', '18xRFycXv2dDfQefS3ngUySizQmMnrFWu', 'Soul Society'],
    ['7', 'Lieutenant', '1l0zDkCECeiefGNAOrBp3305BlBTukiJs', 'Soul Society'],
    ['8', 'Captain', '10OiQG8IicwBgs3RXg865YMs-zBrj5mwd', 'Soul Society'],
    ['9', "Uryu's Resolve", '1ORATqSjsmymOHN31dcG2gzGiE6S-F8e_', 'Soul Society'],
    ['10', 'Execution Date', '1jJC_ClFSevmryhA6B__SzpiTonpM3al2', 'Sauvetage de Rukia'],
    ['11', 'A Promise', '1PyT7-uZkhR1y0U57AamrpWTqBnXBefRn', 'Sauvetage de Rukia'],
    ['12', 'Bankai', '1zKthyFO1sBv8uocyujajdm4DjhdXXf17', 'Sauvetage de Rukia'],
  ],
  s3: [
    ['13', 'New Student', '1TYC_wJnFrtCMYD0Wbp4jKz75qrSLB3lf', 'Arrancars'],
    ['14', 'Arancars', '1w5cwPJN0niTc0gqtvvB2Y0-4eCm-05v_', 'Arrancars'],
    ['15', 'Mask', '1Qx6W9J8OuAhmycl_67Wxj-8NwkbgggTz', 'Arrancars'],
    ['16', 'Eleven Seconds', '1WzGFL6k9-jQLBU6ytAcXkJawPpXV72VO', 'Arrancars'],
  ],
  s4: [
    ['17', 'Hueco Mundo', '1rf7PcpU9nnHAOL17vl0onBRxe1alMWoG', 'Hueco Mundo'],
    ['18', 'Privaron Espada', '1Mzc0XyeLuwypPjaze14fYGHjKC99oV2Q', 'Hueco Mundo'],
    ['19', 'Aaroniero', '1mk1QCMiQJaFE6yDAB5gwHQZNklX1N3MU', 'Hueco Mundo'],
    ['20', 'Grimmjow', '1inlK_9yObMRcre-kaU3yElrHLcwjZ8le', 'Hueco Mundo'],
    ['21', 'Nelliel', '1ARsYN1LXHz2HBLvH2YFkMEciZz2L9Cny', 'Hueco Mundo'],
    ['22', 'Backup', '1BhdRhTKJcKNGt7IrrfrdZROVl1qjnl6U', 'Hueco Mundo'],
  ],
  s5: [
    ['23', 'Hollowfication', '1bqdywU0yWoiLUKdfSaRZ66pVIkHRv3gO', 'Turn Back the Pendulum'],
  ],
  s6: [
    ['24', 'Invasion', '1lKoqbhxwMlggeYcI53ud6dGJB2LIeVZ5', 'Bataille de Karakura'],
    ['25', 'Demon', '1w8LrdTc-PDN4_1dU-qd5nu0L0loh-VI9', 'Bataille de Karakura'],
    ['26', 'Ulquiorra', '1QAzEGYOsHGguH2CH1GhUdvtQ4iKWAclA', 'Bataille de Karakura'],
    ['27', 'Death', '1Y7dPW-9pwjjpYmStiokCd5TNFa5CxL0L', 'Bataille de Karakura'],
    ['28', 'Arrival', '1f2tvCynCMurAwk7nO5jbS1eSO8cHxqde', 'Bataille de Karakura'],
    ['29', 'Wonderweiss', '152S0zs1Z0ohZaiFplx1EMmfVCtYQOTg2', 'Bataille de Karakura'],
    ['30', 'Own Will', '1aBqKB4hn2DQIolh99HYy9lW3mnmu-PTW', 'Bataille de Karakura'],
    ['31', 'Two Thousand Hours', '10RYkJRZm-OszFsrOkICwXJvG0AwMrr8u', 'Bataille de Karakura'],
    ['32', 'Powerless', '1pmbEP1suhlcb0iCj3KjRweeHYBa2i5e6', 'Bataille de Karakura'],
  ],
  s7: [
    ['33', 'Tsukishima', '1Am6DTQJxkPLrXjqcmtvivxrT2Eo4jeug', 'Fullbring'],
    ['34', 'Memories', '1nSn-0fDxjV7VWFhH1tRsKxFPPU1gki1J', 'Fullbring'],
    ['35', 'Fullbringers', '1-9fSlahH9FiNqIPE3K61vP0RhUFn7RrE', 'Fullbring'],
  ],
  bonus: [
    ['1', 'Bonus 01', '1ObM3iZOd2ffYf6cDt9c1R1gj6-sds6lB', 'Bonus'],
    ['2', 'Bonus 02', '1ygLSFUDYKyAiTy4qgkgypL9zEgOKyyfA', 'Bonus'],
    ['3', "Kon's Adventure", '1ght3jPhjrimYOvedr1VmwC0NrfX9MlgQ', 'Bonus'],
    ['4', 'Bonus 04', '1xcbbaAoyc71y_5HRFQWxHsrmzwdYa6KK', 'Bonus'],
  ],
}

module.exports = { seasons, episodes }
