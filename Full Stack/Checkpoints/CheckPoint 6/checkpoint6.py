# Cree una clase de Python llamada Usuario que use el método init y cree un nombre de usuario y una contraseña. Crea un objeto usando la clase.

class User:
    def __init__(self, user_name, password):
        self.user_name = user_name
        self.password = password

    def display_info(self):
        print(f"Username: {self.user_name}")
        print(f"Password: {self.password}")


user1 = User("user123", "password123")
print("Nombre de usuario:", user1.user_name)
print("Contraseña:", user1.password)
#user1.display_info()