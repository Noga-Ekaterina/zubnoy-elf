import os

for i in range(10, 18):
    folder_name = str(i)
    os.makedirs(folder_name, exist_ok=True)

print("10 папок успешно созданы.")