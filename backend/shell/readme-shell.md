# while + jstack 
```bash
# print jstak every 200ms
while [ 1 ]; do sleep 0.2 && i=$((i+1)) && echo $i && jstack -l 29388 > /tmp/test/$i; done
```

