# Задание 1 - Docker CLI

1. Загрузите образ busybox последней версии
1. Запустите новый контейнер busybox с командой ping сайта netology.ru, и количеством пингов 7, поименуйте контейнер pinger
1. Выведите на список всех контейнеров - запущенных и остановленных
1. Выведите на экран логи контейнера с именем pinger
1. Запустите второй раз контейнера с именем pinger
1. Выведите на список всех контейнеров - запущенных и остановленных
1. Выведите на экран логи контейнера с именем pinger
1. Определите по логам общее количество запусков команды ping и какое общее количество отправленых запросов
1. Удалите контейнер с именем pinger
1. Удалите образ busybox

## Консоль
PS C:\Users\anton> docker pull busybox:latest
latest: Pulling from library/busybox
3f4d90098f5b: Pull complete
Digest: sha256:3fbc632167424a6d997e74f52b878d7cc478225cffac6bc977eedfe51c7f4e79
Status: Downloaded newer image for busybox:latest
docker.io/library/busybox:latest

What's Next?
  View summary of image vulnerabilities and recommendations → docker scout quickview busybox:latest
PS C:\Users\anton> docker run -it busybox ping -c 7 netology.ru
PING netology.ru (172.67.21.207): 56 data bytes
64 bytes from 172.67.21.207: seq=0 ttl=62 time=5.504 ms
64 bytes from 172.67.21.207: seq=1 ttl=62 time=5.795 ms
64 bytes from 172.67.21.207: seq=2 ttl=62 time=9.596 ms
64 bytes from 172.67.21.207: seq=3 ttl=62 time=9.876 ms
64 bytes from 172.67.21.207: seq=4 ttl=62 time=9.866 ms
64 bytes from 172.67.21.207: seq=5 ttl=62 time=8.840 ms
64 bytes from 172.67.21.207: seq=6 ttl=62 time=7.064 ms

--- netology.ru ping statistics ---
7 packets transmitted, 7 packets received, 0% packet loss
round-trip min/avg/max = 5.504/8.077/9.876 ms
PS C:\Users\anton> docker ps
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
PS C:\Users\anton> docker ps -a
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS                      PORTS     NAMES
551d91dff657   busybox   "ping -c 7 netology.…"   31 seconds ago   Exited (0) 24 seconds ago             gifted_almeida
PS C:\Users\anton> docker rename gifted_almeida pinger
PS C:\Users\anton> docker ps -a
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS                      PORTS     NAMES
551d91dff657   busybox   "ping -c 7 netology.…"   51 seconds ago   Exited (0) 44 seconds ago             pinger
PS C:\Users\anton> docker logs pinger
PING netology.ru (172.67.21.207): 56 data bytes
64 bytes from 172.67.21.207: seq=0 ttl=62 time=5.504 ms
64 bytes from 172.67.21.207: seq=1 ttl=62 time=5.795 ms
64 bytes from 172.67.21.207: seq=2 ttl=62 time=9.596 ms
64 bytes from 172.67.21.207: seq=3 ttl=62 time=9.876 ms
64 bytes from 172.67.21.207: seq=4 ttl=62 time=9.866 ms
64 bytes from 172.67.21.207: seq=5 ttl=62 time=8.840 ms
64 bytes from 172.67.21.207: seq=6 ttl=62 time=7.064 ms

--- netology.ru ping statistics ---
7 packets transmitted, 7 packets received, 0% packet loss
round-trip min/avg/max = 5.504/8.077/9.876 ms
PS C:\Users\anton> docker start pinger
pinger
PS C:\Users\anton> docker ps -a
CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS                      PORTS     NAMES
551d91dff657   busybox   "ping -c 7 netology.…"   4 minutes ago   Exited (0) 25 seconds ago             pinger
PS C:\Users\anton>
PS C:\Users\anton> docker logs pinger
PING netology.ru (172.67.21.207): 56 data bytes
64 bytes from 172.67.21.207: seq=0 ttl=62 time=5.504 ms
64 bytes from 172.67.21.207: seq=1 ttl=62 time=5.795 ms
64 bytes from 172.67.21.207: seq=2 ttl=62 time=9.596 ms
64 bytes from 172.67.21.207: seq=3 ttl=62 time=9.876 ms
64 bytes from 172.67.21.207: seq=4 ttl=62 time=9.866 ms
64 bytes from 172.67.21.207: seq=5 ttl=62 time=8.840 ms
64 bytes from 172.67.21.207: seq=6 ttl=62 time=7.064 ms

--- netology.ru ping statistics ---
7 packets transmitted, 7 packets received, 0% packet loss
round-trip min/avg/max = 5.504/8.077/9.876 ms
PING netology.ru (172.67.21.207): 56 data bytes
64 bytes from 172.67.21.207: seq=0 ttl=62 time=6.032 ms
64 bytes from 172.67.21.207: seq=1 ttl=62 time=12.497 ms
64 bytes from 172.67.21.207: seq=2 ttl=62 time=6.124 ms
64 bytes from 172.67.21.207: seq=3 ttl=62 time=5.950 ms
64 bytes from 172.67.21.207: seq=4 ttl=62 time=6.161 ms
64 bytes from 172.67.21.207: seq=5 ttl=62 time=7.551 ms
64 bytes from 172.67.21.207: seq=6 ttl=62 time=6.945 ms

--- netology.ru ping statistics ---
7 packets transmitted, 7 packets received, 0% packet loss
round-trip min/avg/max = 5.950/7.322/12.497 ms
PING netology.ru (172.67.21.207): 56 data bytes
64 bytes from 172.67.21.207: seq=0 ttl=62 time=5.303 ms
64 bytes from 172.67.21.207: seq=1 ttl=62 time=23.132 ms
64 bytes from 172.67.21.207: seq=2 ttl=62 time=5.907 ms
64 bytes from 172.67.21.207: seq=3 ttl=62 time=5.918 ms
64 bytes from 172.67.21.207: seq=4 ttl=62 time=9.372 ms
64 bytes from 172.67.21.207: seq=5 ttl=62 time=9.096 ms
64 bytes from 172.67.21.207: seq=6 ttl=62 time=5.616 ms

--- netology.ru ping statistics ---
7 packets transmitted, 7 packets received, 0% packet loss
round-trip min/avg/max = 5.303/9.192/23.132 ms
PING netology.ru (104.22.40.171): 56 data bytes
64 bytes from 104.22.40.171: seq=0 ttl=62 time=5.602 ms
64 bytes from 104.22.40.171: seq=1 ttl=62 time=6.530 ms
64 bytes from 104.22.40.171: seq=2 ttl=62 time=5.145 ms
64 bytes from 104.22.40.171: seq=3 ttl=62 time=5.985 ms
64 bytes from 104.22.40.171: seq=4 ttl=62 time=9.415 ms
64 bytes from 104.22.40.171: seq=5 ttl=62 time=5.785 ms
64 bytes from 104.22.40.171: seq=6 ttl=62 time=6.074 ms

--- netology.ru ping statistics ---
7 packets transmitted, 7 packets received, 0% packet loss
round-trip min/avg/max = 5.145/6.362/9.415 ms
PS C:\Users\anton> docker rm pinger
pinger
PS C:\Users\anton> docker rmi busybox
Untagged: busybox:latest
Untagged: busybox@sha256:3fbc632167424a6d997e74f52b878d7cc478225cffac6bc977eedfe51c7f4e79
Deleted: sha256:a416a98b71e224a31ee99cff8e16063554498227d2b696152a9c3e0aa65e5824
Deleted: sha256:3d24ee258efc3bfe4066a1a9fb83febf6dc0b1548dfe896161533668281c9f4f
PS C:\Users\anton>
