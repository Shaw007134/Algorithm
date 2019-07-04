from itertools import product
from itertools import permutations
from itertools import combinations

A = ['a','b']
B = [1, 2, 3]
print(list(product(A,B)))

for p in product('ab', repeat=4):
  print(''.join(p))

for p in permutations('abcde',2):
  print(''.join(p))

for c in combinations('abcdefgh', 2):
  print(''.join(c))

def T(n):
  if n <= 1:
    return 0
  return (n - 1) + T(n - 1)
print(T(8))


C = dict() #C([n,k]) is equal to n choose k
for n in range(8):
  C[n,0] = 1
  C[n,n] = 1

  for k in range(1,n):
    C[n,k] = C[n-1, k - 1] + C[n-1, k]
print(C[7,4])


count = 0
for d in product(range(10), repeat=4):
  if 7 in d:
    count += 1
print(count)
print(10**4 - 9**4)

count = 0 
for d in product(range(10), repeat=4):
  if sum(d) == 10:
    count += 1
print(count)
