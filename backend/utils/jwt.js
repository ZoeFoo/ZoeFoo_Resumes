const jwt = require('jsonwebtoken');

const privateKey = `-----BEGIN PRIVATE KEY-----
MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDOfA9nKGiRXbx2
Bw3LDAGoGtwgU7bGnX8Su3n03r5UBCjOeINg9Qgfbt2bKllLhbY6Vtktt0KwJWup
eG22Ywx7Uym4DQq/V50+SwnByzzTE+RaRksdCkPpopvxGEKBfpfbpwd7eh5Wv68o
/Y2Bfo4pbUSlWGRwXMHau8cUZ0a23DTynr/+QojCq1rGFC67+37DFpojdON+yjtk
tDLwIFVHibCGqvQKHtvSpqwRD16NgxIWwLnj3YB9kzLW8CEx664RL5NHgjZyM2C1
4quZ2ycxJHSOwUh5M3dK/doKMx7QkKWszESAq4+rFzR2WDUm6udqgBtPu+u7iKi9
jRAnJhAPAgMBAAECggEAQziJLSyvCjAJdCUsvN8ORQNliVKnjLZmUZteAzVmoeRu
wnTiVHTA7bbCh0q8okUIA6sVbfgcykqMZ7IQiZFqVVXIHaaFSrCDvO1h4ki/Zvox
W6BJwM0AOfXZrZ4XvJ+RYY1Zdr3VVal2pTISWMdyEZOEhw2lOR1BcOuzznUmxM2K
65I9dY3/SWxX1Qpl4/2A317MHKL1+Mck3eg9/ZWhJgESGVCjSkSQrfT48FZEgxXF
vWWteb6VyPFdDJQwyoTSjJ8Mb4jY0A3FxJDySNsoKQ1RtXJ3ozp3RACPE4o1Y9dH
fT7W7DkfuE9ov8kclbkw3bUpcfMF4nvXrtmWTkirgQKBgQDowZF3SEY31HCtDTl3
dMUkFUlvb+Y0SwZw5sGww/ESlgdLx/V8TZ4HLd693LCysKN3cOZSHCS4BummUzUJ
rO5k0Qr+B1DvwNoXH8SmjGNjaPM2ajzLp13vPJeKehXa9wOQfB5pGSeo3n7kBYDk
NI8nLDJ6tSNPWh5jQJJ62VKHjwKBgQDjGtu0ZwQin0suC2EUQIe/5WnrSeOj9Nwc
W+rd0kUyjzbWAkJYGkmWwPJAXlbNTJWuhAwtiHOV8sUZIo5KPF8U1aWD5ka2u4ps
sl8v2T/1T3qWkgpQob3jUDiYML0T4MpTm4Y6o0+D++keiqDNIUziJatdsoWnn5Dq
4hJCzUuvgQKBgBfbBwq/uJquRmImMdahfDcni2BFisWfTuixbfatDn9GKzdEJk/4
MJMxy1uQS/f0jLyIMMMHqWfHJZlre8sjE0f3+PVyUIRSMsgd9GzRhLpCnnLcTqDc
5Y7ImguSWb0Yhh//6KoC7wKq0zyRp9U74dQ0/nN/L0BJz0WC78Bxl7jXAoGAf+kw
tXsQKS/u+BAQrYdq7foYnh0Pydiv4Ikkz6sOrltbV04Ob/DeYbpqtzZrTVZFN/XH
ph2kfGAwAugjnExEgUeT4aZhTapzXKVaV2jVTSVmtkeq558xhEY6mf1ZgUiqrEx8
Xap9rqjDtCAAUYjf9L+itTNHdBG7XY/XGSjn6AECgYABCHit6dWu73Fz5yjL1o2W
WYJvNdgYULGz8UhtkjJo4kXgvwphPJva8XmFnbbLrMUAQAkS7N1rQGfkwHgKrrTn
sjmgHWFARWObO1/hCf0oY0Ce8QsJ7oVWldvjrnCB+3MyVmGL1bnF6E2r/6Qg9SqQ
9R+r730a98Qow9UBiOaHXQ==
-----END PRIVATE KEY-----`;

const publicKey = `	
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAznwPZyhokV28dgcNywwB
qBrcIFO2xp1/Ert59N6+VAQozniDYPUIH27dmypZS4W2OlbZLbdCsCVrqXhttmMM
e1MpuA0Kv1edPksJwcs80xPkWkZLHQpD6aKb8RhCgX6X26cHe3oeVr+vKP2NgX6O
KW1EpVhkcFzB2rvHFGdGttw08p6//kKIwqtaxhQuu/t+wxaaI3Tjfso7ZLQy8CBV
R4mwhqr0Ch7b0qasEQ9ejYMSFsC5492AfZMy1vAhMeuuES+TR4I2cjNgteKrmdsn
MSR0jsFIeTN3Sv3aCjMe0JClrMxEgKuPqxc0dlg1JurnaoAbT7vru4iovY0QJyYQ
DwIDAQAB
-----END PUBLIC KEY-----`;

const createJWT = ( payload ) => {
    return jwt.sign(payload, privateKey, { algorithm: 'RS256' });
};

module.exports = { createJWT };