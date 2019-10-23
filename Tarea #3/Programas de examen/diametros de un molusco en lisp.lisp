(defun diametro (N D)
    (push D lista)
    (if (or (zerop N) (= N 1)) D
    (segmento-diametro (- N 1) (* D (/ (fibonacci (- I 2)) (fibonacci (- I 1))))))
)

(defun fibonacci (N) 
    (if (or (zerop N) (= N 1))
    1
    (+ (fibonacci (- N 1)) (fibonacci (- N 2))))
)

(defun segmento-diametro (N D)
    (defvar lista nil)
    (defvar I (+ N 1))
    (diametro N D)
    (setq L (reverse lista))
)