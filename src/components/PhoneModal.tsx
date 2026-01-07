import { Phone, MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface PhoneModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  phoneNumber: string;
}

const PhoneModal = ({ open, onOpenChange, phoneNumber }: PhoneModalProps) => {
  const cleanNumber = phoneNumber.replace(/\s/g, "").replace("+", "");
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center font-serif text-xl">
            How would you like to contact us?
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <Button
            size="lg"
            className="w-full py-6 text-lg"
            asChild
          >
            <a href={`tel:${phoneNumber}`}>
              <Phone className="mr-3 h-5 w-5" />
              Call {phoneNumber}
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full py-6 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a href={`https://wa.me/${cleanNumber}`} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-3 h-5 w-5" />
              WhatsApp
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PhoneModal;
