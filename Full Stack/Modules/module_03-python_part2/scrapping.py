# import requests
# from bs4 import BeautifulSoup
# import inflection

# # URL de la página a scrapear
# url = 'http://www.dailysmarty.com/topics/python'

# # Realizar la solicitud GET a la página
# response = requests.get(url)

# # Verificar si la solicitud fue exitosa
# if response.status_code == 200:
#     # Parsear el contenido HTML de la página
#     soup = BeautifulSoup(response.content, 'html.parser')
    
#     # Encontrar todos los enlaces (<a>) en la página
#     links = soup.find_all('a')
    
#     # Filtrar los enlaces que contienen '/posts/' en su URL
#     post_links = [link['href'] for link in links if '/posts/' in str(link)]
    
#     # Convertir las URL de los posts en títulos
#     post_titles = []
#     for post_link in post_links:
#         # Extraer el título del post de la URL y convertirlo
#         title = ' '.join(post_link.split('/')[-1].split('-'))
#         formatted_title = inflection.titleize(title)
#         post_titles.append(formatted_title)
    
#     # Imprimir los títulos de los posts
#     for title in post_titles:
#         print(title)
# else:
#     print('Error al obtener la página:', response.status_code)

import requests
from bs4 import BeautifulSoup
from inflection import titleize

def title_generator(links):
    titles = []

    def post_formatter(url):
        if 'posts' in url:
            url = url.split('/')[-1]
            url = url.replace('-', ' ')
            url = titleize(url)
            titles.append(url)

# UPDATED CODE
    for link in links:
        if link.get('href') == None:
            continue
        else:
            post_formatter(link.get("href"))
# UPDATED CODE

    return titles


r = requests.get('http://www.dailysmarty.com/topics/python')
soup = BeautifulSoup(r.text, 'html.parser')
links = soup.find_all('a')
titles = title_generator(links)

for title in titles:
    print(title)