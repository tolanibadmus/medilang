import { SupportedMedication, SupportedLanguages } from "./interfaces"
import diagnoses from "./diagnoses.json"

const supportedDiagnoses: Record<string, SupportedMedication> = diagnoses

export class Medilang {
    public static getDiagnosisInOtherLanguage(diagnosis: string, language: SupportedLanguages): string | null {
        diagnosis = diagnosis.toLowerCase()
        if (supportedDiagnoses[diagnosis]) {
            return supportedDiagnoses[diagnosis][language]
        }
        return null
    }
}

