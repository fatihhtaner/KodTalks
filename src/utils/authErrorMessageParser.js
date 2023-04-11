export default function(errorCode) {
    switch (errorCode) {
        case "auth/invalid-email":
            return "Geçersiz e-posta adresi";
        
        case "auth/user-disabled":
            return "Kullanıcı engellendi";

        case "auth/user-not-found":
            return "Kullanıcı bulunamadı";

        case "auth/wrong-password":
            return "Şifre yanlış";

        case "auth/email-already-in-use":
            return "E-posta adresi zaten kullanımda";

        case "auth/weak-password":
            return "Şifre en az 6 karakter olmalıdır";
    
        default:
            return "Bilinmeyen bir hata oluştu";
    }
}